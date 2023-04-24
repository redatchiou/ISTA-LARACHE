import { Link } from "@inertiajs/react";
export default function Upload({ image }) {
    console.log(typeof image);
    return (
        <>
            <form
                action="/api/upload"
                method="post"
                encType="multipart/form-data"
            >
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="file" name="imagy" id="image" />
                </div>
                <input type="submit" value="Envoyer" />
            </form>
            <div className="w-60 h-60">
                <img src={image} alt="No Photo" />
                <Link
                    href={`/api/download`}
                    as="button"
                    method="post"
                    data={{ payload: "image_de_test.png" }}
                >
                    Download Image
                </Link>
            </div>
        </>
    );
}
