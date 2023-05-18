npx create-next-app@latest

# OR

yarn create next-app

npm install next react react-dom

# OR

yarn add next react react-dom

function Demo() {
return <h1>Demo</h1>
}
export default Demo

export async function getServerSideProps(context) {
return {
props: {},
}
}

export async function getServerSideProps() {
const res = await fetch(`https://.../data`)
const data = await res.json()
return { props: { data } }
}
export default Page

export async function getStaticPaths() {
return {
paths: [
{ params: { ... } }
],
fallback: true
};
}

function User() {
const [data, setData] = useState(null)
const [isLoading, setLoading] = useState(false)
useEffect(() => {
setLoading(true)
fetch('api/user-data')
.then((res) => res.json())
.then((data) => {
setData(data)
setLoading(false)
})
}, [])
if (isLoading) return <p>Loading user data...</p>
if (!data) return <p>No user data found</p>
return (

<div>
<h1>{data.name}</h1>
<p>{data.bio}</p>
</div>
)
}

const path = require('path')
module.exports = {
sassOptions: {
includePaths: [path.join(__dirname, 'styles')],
},
}

import Link from 'next/link'
function Home() {
return (
<ul>
<li>
<Link href="/">
<a>Home</a>
</Link>
</li>
<li>
<Link href="/about">
<a>About Us</a>
</Link>
</li>
<li>
<Link href="/blog/hello-world">
<a>Blog Post</a>
</Link>
</li>
</ul>
)
}
export default Home
