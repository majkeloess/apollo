import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, "/");
    return Response.redirect(url);
  }
});

// export const config = {
//   matcher: "/dashboard/:path*",
// };
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};