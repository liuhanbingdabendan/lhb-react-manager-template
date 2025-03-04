export default function (initialState: { authRoutes: string[] | undefined }) {
  const { authRoutes = [] } = initialState;
  return {
    authFilter: (route: { name: string }) => {
      return authRoutes.includes(route.name);
    }, // initialState 中包含了的路由才有权限访问
  };
}
