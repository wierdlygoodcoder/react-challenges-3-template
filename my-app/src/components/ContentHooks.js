import React, {useState, useEffect} from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
    const [isLoaded, setisLoaded] = useState(false);
    const [fetchedPosts, setfetchedPosts] = useState([]);

    useEffect(()=>{
        setTimeout(() => {
            setisLoaded(true);
            setfetchedPosts(savedPosts);
        }, 2000)
    }, []);

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })

        setfetchedPosts(filteredPosts)
    }
  return (
    <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
                <label htmlFor="searchinput">Search</label>
                <input
                type="search"
                id="searchinput"
                onChange={(e)=>{handleChange(e)}}
                />
                <h4>posts found: {fetchedPosts.length}</h4>
            </form>

        </div>
        <div className={css.SearchResults}>
            {
                isLoaded ? 
                <PostItem savedPosts={fetchedPosts}/>
                : <loader/>
            }
        </div>
    </div>
  )
}

export default ContentHooks