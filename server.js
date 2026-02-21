const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const imageDir = path.join(__dirname, 'images');

if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, imageDir);
    },
    filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const base = path.basename(file.originalname, ext);
        const safeBase = base.replace(/[^a-z0-9-_]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase();
        const stamp = Date.now();
        cb(null, `${safeBase || 'upload'}-${stamp}${ext}`);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
        const allowed = ['image/jpeg', 'image/png', 'image/webp'];
        if (allowed.includes(file.mimetype)) {
            cb(null, true);
            return;
        }
        cb(new Error('Formato invalido. Use JPG, PNG ou WebP.'));
    }
});

app.use(express.static(__dirname));

app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        res.status(400).json({ error: 'Arquivo nao enviado.' });
        return;
    }

    res.json({
        url: `/images/${req.file.filename}`
    });
});

app.use((err, _req, res, _next) => {
    if (!err) {
        res.status(500).json({ error: 'Erro inesperado.' });
        return;
    }

    res.status(400).json({ error: err.message || 'Falha no upload.' });
});

app.listen(PORT, () => {
    console.log(`Servidor ativo em http://localhost:${PORT}`);
});
