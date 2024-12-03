import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select, { MultiValue } from 'react-select';
import "./Create.css";

interface OptionType {
    value: string;
    label: string;
}

const genreOptions: OptionType[] = [
    { value: 'Martial_Arts', label: 'Боевые искусства' },
    { value: 'Harem', label: 'Гарем' },
    { value: 'Comedy', label: 'Комедия' },
    { value: 'Romance', label: 'Романтика' },
];

const tagOptions: OptionType[] = [
    { value: 'Action', label: 'Экшн' },
    { value: 'Adventure', label: 'Приключения' },
    { value: 'Fantasy', label: 'Фэнтези' },
    { value: 'Mystery', label: 'Мистика' },
];

interface Chapter {
    number: string;
    frames: File[][];
}

interface FormData {
    title: string;
    year: string;
    description: string;
    genres: MultiValue<OptionType>;
    tags: MultiValue<OptionType>;
    previewImage: FileList | null;
}

export default function MangaForm() {
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>();
    const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
    const [chapters, setChapters] = useState<Chapter[]>([]);

    const onSubmit = async (data: FormData) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('year', data.year);
        data.genres.forEach((genre) => formData.append('genres', genre.value));
        data.tags.forEach((tag) => formData.append('tags', tag.value));
        if (data.previewImage) formData.append('previewImage', data.previewImage[0]);

        chapters.forEach((chapter, index) => {
            formData.append(`chapter_${index + 1}_number`, chapter.number);
            chapter.frames.forEach((frame, frameIndex) => {
                frame.forEach((image) => formData.append(`chapter_${index + 1}_frame_${frameIndex + 1}`, image));
            });
        });

        // const response = await fetch('/api/manga', {
        //     method: 'POST',
        //     body: formData,
        // });
        //
        // if (response.ok) {
        //     console.log('Данные успешно загружены!');
        // } else {
        //     console.error('Ошибка при загрузке');
        // }
    };

    const handlePreviewImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        if (file) {
            setPreviewImageUrl(URL.createObjectURL(file));
        } else {
            setPreviewImageUrl(null);
        }
    };

    const handleAddChapter = () => {
        setChapters([...chapters, { number: '', frames: [[]] }]);
    };

    const handleAddFrame = (chapterIndex: number) => {
        const newChapters = [...chapters];
        newChapters[chapterIndex].frames.push([]);
        setChapters(newChapters);
    };

    const handleRemoveChapter = (index: number) => {
        setChapters(chapters.filter((_, i) => i !== index));
    };

    const handleImageChange = (chapterIndex: number, frameIndex: number, files: FileList | null) => {
        if (files) {
            const newChapters = [...chapters];
            newChapters[chapterIndex].frames[frameIndex] = Array.from(files);
            setChapters(newChapters);
        }
    };

    const handleChapterNumberChange = (index: number, value: string) => {
        const newChapters = [...chapters];
        newChapters[index].number = value;
        setChapters(newChapters);
    };

    const handleRemoveFrame = (chapterIndex: number, frameIndex: number) => {
        const newChapters = [...chapters];
        newChapters[chapterIndex].frames.splice(frameIndex, 1);
        setChapters(newChapters);
    };

    return (
        <section className="Create">
            <h1>Создать мангу</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label>Название</label>
                    <input
                        type="text"
                        {...register("title", { required: "Название обязательно" })}
                        placeholder="Введите название"
                    />
                    {errors.title && <span className="error">{errors.title.message}</span>}
                </div>

                <div>
                    <label>Описание</label>
                    <textarea
                        {...register("description", { required: "Описание обязательно" })}
                        placeholder="Введите описание"
                    />
                    {errors.description && <span className="error">{errors.description.message}</span>}
                </div>

                <div>
                    <label>Год выпуска</label>
                    <input
                        type="text"
                        {...register("year", {
                            required: "Год выпуска обязателен",
                            pattern: {
                                value: /^\d{4}$/,
                                message: "Введите корректный год в формате YYYY"
                            },
                            validate: (value: string) =>
                                Number(value) >= 1900 && Number(value) <= new Date().getFullYear() ||
                                `Год должен быть от 1900 до ${new Date().getFullYear()}`
                        })}
                        placeholder="Введите год выпуска"
                    />
                    {errors.year && <span className="error">{errors.year.message}</span>}
                </div>

                <div>
                    <label>Превью</label>
                    <input
                        type="file"
                        accept="image/*"
                        {...register("previewImage")}
                        onChange={handlePreviewImageChange}
                    />
                    {previewImageUrl && (
                        <div className="preview-image-container">
                            <img src={previewImageUrl} alt="Preview" className="preview-image"/>
                        </div>
                    )}
                </div>

                <div>
                    <label>Выберите жанры</label>
                    <Controller
                        name="genres"
                        control={control}
                        rules={{ required: "Выберите хотя бы один жанр" }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={genreOptions}
                                isMulti
                                placeholder="Выберите жанры"
                            />
                        )}
                    />
                    {errors.genres && <span className="error">{errors.genres.message}</span>}
                </div>

                <div>
                    <label>Выберите теги</label>
                    <Controller
                        name="tags"
                        control={control}
                        rules={{ required: "Выберите хотя бы один тег" }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={tagOptions}
                                isMulti
                                placeholder="Выберите теги"
                            />
                        )}
                    />
                    {errors.tags && <span className="error">{errors.tags.message}</span>}
                </div>

                {chapters.map((chapter, chapterIndex) => (
                    <div key={chapterIndex} className="chapter">
                        <h3>Глава {chapterIndex + 1}</h3>
                        <div>
                            <label>Номер главы</label>
                            <input
                                type="text"
                                value={chapter.number}
                                onChange={(e) => handleChapterNumberChange(chapterIndex, e.target.value)}
                                placeholder="Введите номер главы"
                                required
                            />
                        </div>

                        {chapter.frames.map((_, frameIndex) => (
                            <div key={frameIndex} className="frame">
                                <label>Фрейм {frameIndex + 1}</label>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(chapterIndex, frameIndex, e.target.files)}
                                />
                                <button
                                    className="button-delete"
                                    type="button"
                                    onClick={() => handleRemoveFrame(chapterIndex, frameIndex)}
                                >
                                    Удалить фрейм
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={() => handleAddFrame(chapterIndex)}>
                            + Добавить фрейм
                        </button>
                        <button type="button" onClick={() => handleRemoveChapter(chapterIndex)}>
                            Удалить главу
                        </button>
                    </div>
                ))}

                <button type="button" onClick={handleAddChapter}>+ Добавить главу</button>
                <button type="submit">Сохранить мангу</button>
            </form>
        </section>
    );
}
