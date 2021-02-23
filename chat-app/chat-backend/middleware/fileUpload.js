const multer = require("multer");
const fs = require("fs");
const path = require("path");

exports.userFile = ((req, res, next) => {
  const getFileType = (file) => {
    const mimeType = file.mimetype.split("/");
    return mimeType[mimeType.length - 1];
  };

  const generateFileName = (req, file, cb) => {
    const extention = getFileType(file);
    const filename =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + "." + extention;
    cb(null, file.fieldname + "-" + filename);
  };

  const fileFilter = (req, file, cb) => {
    const extention = getFileType(file);
    const allowedTypes = `/jpeg|jpg|png/`;
    const passed = allowedTypes.test(extention);
    if (passed) {
      return cb(null, true);
    }

    return cb(null, false);
  };

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const { id } = req.user;
      const dest = `uploads/user/${id}`;
      fs.access(dest, (err) => {
        if (err) {
          return fs.mkdir(dest, (error) => {
            cb(error, dest);
          });
        } else {
          fs.readdir(dest, (err, files) => {
            if (err) throw err;
            for (const file of files) {
              fs.unlink(path.join(dest, file), (err) => {
                if (err) throw err;
              });
            }
          });
        }
        return cb(null, dest);
      });
    },
    filename: generateFileName,
  });

  return multer({ storage, fileFilter }).single("avatar");
})();
