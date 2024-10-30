import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption} from "@/components/ui/table"
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/post";
import { Button } from "../ui/button";

interface PostsTableProps {
    limit?: number
    title?: string
}

const PostsTable = ({ limit, title}: PostsTableProps) => {

    // SORT POST DESC BASED ON DATE
    const sortedPosts: Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // Filter posts to limit
    const filteredPosts: Post[] = limit ? sortedPosts.slice(0, limit) : sortedPosts

    const titleText = title ? title : "list of recent posts"

    return ( <div className="mt-10">
        <h3 className="text-2xl mb-4 font-semibold">
            {title ? title : "Posts"}
        </h3>
        <Table>
            <TableCaption>
                {titleText}
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Author</TableHead>
                    <TableHead className="hidden md:table-cell text-right" >Date</TableHead>
                    <TableHead className="hidden md:table-cell text-right" >View</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                { filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                        <TableCell>
                            {post.title}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                            {post.author}
                        </TableCell>
                        <TableCell className="text-right hidden md:table-cell">
                            {post.date}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        <Link href={`/posts/edit/${post.id}`}> 
                        <Button className="bg-blue-500 hover:bg-blue-50"> Edit</Button>
                        </Link>
                        </TableCell>
                    </TableRow>
                ) )}
            </TableBody>
        </Table>
        posts</div> );
}
 
export default PostsTable;