import NextAuth, { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import users from "../../../../../public/db/users.json";

export const authOptions = {
  secret: "randomasssecret",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        console.log("credentials: ", email, password);

        let response = await fetch(
          "http://localhost:8080/login?email=" + email + "&password=" + password
        );

        response = await response.text();

        console.log("response: ", response);

        if (response == "failed") return null;

        return JSON.parse(response);
      },
    }),
  ],
};

export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const user = users.find((user) => user.email === userEmail);
  if (!user) {
    return false;
  }
  if (user.role == "Admin") return true;
  else return false;
}

export async function isCourier() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const user = users.find((user) => user.email === userEmail);
  if (!user) {
    return false;
  }
  if (user.role == "Courier") return true;
  else return false;
}

export async function isRestaurant() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const user = users.find((user) => user.email === userEmail);
  if (!user) {
    return false;
  }
  if (user.role == "Restaurant") return true;
  else return false;
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
