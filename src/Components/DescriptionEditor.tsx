
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from "@tiptap/extension-placeholder";

const MenuBar = () => {
    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }

    return (
        <div className="control-group">
            <h3>Описание</h3>
            <div className="button-group">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                >
                    <img src="https://img.icons8.com/ios/50/back--v1.png" alt=""/>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                >
                    <img src="https://img.icons8.com/ios/50/forward--v1.png" alt=""/>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    <img src="https://img.icons8.com/ios-filled/50/bold.png" alt=""/>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    <img src="https://img.icons8.com/ios-filled/50/italic.png" alt=""/>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    <img src="https://img.icons8.com/fluency-systems-regular/50/strikethrough.png" alt=""/>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={editor.isActive({textAlign: 'left'}) ? 'is-active' : ''}
                >
                    <img src="https://img.icons8.com/ios/50/align-left.png" alt=""/>
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={editor.isActive({textAlign: 'center'}) ? 'is-active' : ''}
                >
                    <img src="https://img.icons8.com/ios/50/align-center.png" alt=""/>
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={editor.isActive({textAlign: 'right'}) ? 'is-active' : ''}
                >
                    <img src="https://img.icons8.com/ios/50/align-right.png" alt=""/>
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    className={editor.isActive({textAlign: 'justify'}) ? 'is-active' : ''}
                >
                    <img src="https://img.icons8.com/ios/50/align-justify.png" alt=""/>
                </button>

            </div>
        </div>
    )
}

const extensions = [
    Color.configure({types: [TextStyle.name, ListItem.name]}),
    TextStyle,
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false,
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false,
        },

    }),
    TextAlign.configure({
        types: ['heading', 'paragraph'], // Позволяет выравнивать заголовки и параграфы
    }),
    Placeholder.configure({
        placeholder: 'Введите описание...', // Твой текст-подсказка
        showOnlyWhenEditable: true, // Показывать только когда редактор активен
        showOnlyCurrent: true, // Показывать placeholder, даже если курсор не стоит в поле
    }),

]


export default function DescriptionEditor() {
    return (
        <EditorProvider slotBefore={<MenuBar/>} extensions={extensions}/>
    )
}