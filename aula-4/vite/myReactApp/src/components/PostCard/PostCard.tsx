import styles from './PostCard.module.css'

// Interface for Post Data
interface PostData {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
  }

// Component for Each Post
const PostCard = ({ post }: { post: PostData }) => {
  // console.log(post.image)
    return (

      <div className={styles.card}>
        <img src={post.image} alt={post.name} className={styles.cardImage} />
        <h3>{post.name}</h3>
        <p><strong>Price:</strong> {post.price}</p>
        <p>{post.description}</p>
      </div>
    );
  };

  export default PostCard