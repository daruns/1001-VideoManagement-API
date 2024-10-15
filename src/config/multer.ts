export const multerConfig = {
  dest: process.env.UOLOAD_DESTINATION || "../uploads",
  fileFilter: (req:any, file:any, cb: Function) => {
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed!'));
    }
  }
}