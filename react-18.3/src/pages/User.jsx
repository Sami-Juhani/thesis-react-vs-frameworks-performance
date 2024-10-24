import { useLoaderData } from "react-router-dom"
import PostCard from "../components/PostCard"

export default function User() {
  const { user, posts } = useLoaderData()

  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode}
      </div>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="post-container">
        {posts.map((post, i) => (
          <PostCard key={post.id} {...post} image={`https://picsum.photos/1000/1000?random=${i}`} />
        ))}
      </div>
    </>
  )
}
