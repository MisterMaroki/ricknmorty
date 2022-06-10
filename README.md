# Rick and Morty API Explorer Website

- Project built with Next.Js, Typescript


**Bootstrap the application**

```
npx create-next-app 
# or
yarn create next-app

# with typescript
yarn create next-app my-app --typescript
```

**Rendering strategies**


Server-side rendering

```jsx
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```

**Routing**

[https://nextjs.org/docs/routing/introduction](https://nextjs.org/docs/routing/introduction)

**Styling**

[https://nextjs.org/docs/basic-features/built-in-css-support](https://nextjs.org/docs/basic-features/built-in-css-support)

**Environment variables**

[https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables](https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables)

**Router**

```jsx
import { useRouter } from "next/router";
```
