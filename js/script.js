// script.js

function generateFiles() {
    // 获取用户输入
    const fileContent = document.getElementById('brand').value;

    // 生成HTML文件
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Generated HTML</title>
        </head>
        <body>
            <p>${fileContent}</p>
        </body>
        </html>
    `;

    // 创建Blob对象
    const htmlBlob = new Blob([htmlContent], { type: 'text/html' });

    // 创建HTML文件下载链接
    const htmlLink = document.createElement('a');
    htmlLink.href = URL.createObjectURL(htmlBlob);
    htmlLink.download = 'generated.html';
    htmlLink.click();

    // // 生成PDF文件
    // html2pdf().from(htmlContent).outputPdf(pdf => {
    //     // 创建Blob对象
    //     const pdfBlob = new Blob([pdf], { type: 'application/pdf' });

    //     // 创建PDF文件下载链接
    //     const pdfLink = document.createElement('a');
    //     pdfLink.href = URL.createObjectURL(pdfBlob);
    //     pdfLink.download = 'generated.pdf';
    //     pdfLink.click();
    // });
}