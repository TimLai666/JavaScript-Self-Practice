import React, { useState } from "react";



function EditForm({todo, editTodo}) {
    const [content, setContent] = useState(todo.content)
    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(todo.id, content)
        if (!content) return
        setContent("")
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="編輯待辦事項"
            value={content}
            onChange={(e) => {setContent(e.target.value)}} />
            <button type="submit">更新</button>
        </form>
    )
}

export default EditForm;