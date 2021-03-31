import { useState } from 'react'

export default function InputTask({handleSubmit}) {
    const [input, setInput] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        setInput('')
        handleSubmit(input)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Поставить задачу:
                <input type="text"
                       value={input}
                       onChange={(event) => setInput(event.target.value)}
                />
            </label>
            <button type="submit">Добавить</button>
        </form>
    )
}