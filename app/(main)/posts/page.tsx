import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/ui/BackButton"
import PostsPagination from "@/components/posts/PostsPagination";
  

const PostsPage = () => {
    return ( <>
    <BackButton text='Go Back' link="/"></BackButton>
    <PostsTable>
        </PostsTable>
        <PostsPagination></PostsPagination></> );

}
 
export default PostsPage;