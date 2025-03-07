import { useState, useEffect } from "react";
import styles from "./form.module.css";
import PostCard from "../PostCard/PostCard";

// API Endpoint
const apiEndpoint: string = "https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products";

// Interface for Post Data
interface PostData {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
}

// // Component for Each Post
// const PostCard = ({ post }: { post: PostData }) => {
//   return (
//     <div className={styles.card}>
//       <img src={post.imageUrl} alt={post.name} className={styles.cardImage} />
//       <h3>{post.name}</h3>
//       <p><strong>Price:</strong> {post.price}</p>
//       <p>{post.description}</p>
//     </div>
//   );
// };

function Form() {
  // State for Form Data
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  // State for Posts List
  const [posts, setPosts] = useState<PostData[]>([]);

  // Fetch Posts from API
  const getPosts = () => {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => setPosts(data)) // setPosts(data) Store fetched posts in state
      .catch((error) => console.error("Error fetching posts:", error));
  };

  // Post New Data & Refresh Posts
  const post = () => {
    fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        getPosts(); // Refresh posts after successful post
        setFormData({ name: "", image: "", price: "", description: "" }); // Clear form
      })
      .catch((error) => console.error("Error posting data:", error));
  };

  // Fetch Posts on Component Mount
  useEffect(() => {
    getPosts();
  }, []);

  // Handle Input Changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(posts)
  return (
    <div>
      <fieldset className={styles.fieldset}>
        <legend>New Post</legend>
        <div className={styles.form}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
          <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <button onClick={post}>Post</button>
        </div>
      </fieldset>

      <h2>All Posts</h2>
      <div className={styles.postsContainer}>
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post}  />)
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
}

export default Form;
