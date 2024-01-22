import { getProviders } from "next-auth/react";
export const authConfig = {
  providers:[
    getProviders.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
};