import React from "react"

const CreatePost= (props) => {
    return(
        <form>
            <div>
                <label>User Name</label>
                <input type='name'/>
            </div>
            <div>
                <label>Post</label>
                <input type='post'/>
            </div>
            <button>Create</button>
        </form>
    )
}

export default CreatePost