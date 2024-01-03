import './blog.css';
import { Posts } from './posts';

export function Blog() {
    return (
        <div>
            <MainBlog></MainBlog>
            <PostFilter></PostFilter>
            <Posts></Posts>
        </div>
    )
}

function MainBlog() {
    return (
        <div class="mainBlog">
            <div class="mainBlogText">
                <h2>Maxence's blog</h2>
                <span>Your source of great content</span>
            </div>
        </div>
    )
}

function PostFilter() {
    return (
        <div class="postFilter">
            <span class="active" data-filter="AI">AI</span>
            <span class="filter-item" data-filter="Backend">Backend</span>
            <span class="filter-item" data-filter="Bots">Bots</span>
        </div>
    )
}

