import multer from 'multer';
import path from 'path';
export const fileUploadOptions = () => ({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext).replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            cb(null, `${Date.now()}-${name}${ext}`);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        }
        else {
            cb(new Error("Only images are allowed!"));
        }
    }
});
//# sourceMappingURL=fileUploadOptions.js.map