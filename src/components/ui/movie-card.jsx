import Image from "next/image";

export function MovieCard ({ title, image, rating, description }) {
    return (
        <div className="border p-4 rounded">
            <h2>{title}</h2>
            <img src={image} />
        </div>
    );
}