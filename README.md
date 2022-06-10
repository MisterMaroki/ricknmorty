# Rick and Morty API Explorer Website

- Project built with Next.Js, Typescript


**Install dependencies**

```
yarn

or

npm i
```

**Run the application**

```
yarn dev

or

npm run dev
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

