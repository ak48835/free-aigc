document.addEventListener('DOMContentLoaded', function() {
    // 文件选择功能
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    const startCheck = document.getElementById('startCheck');
    const resultSection = document.getElementById('resultSection');
    const progressBar = document.getElementById('progressBar');
    const resultValue = document.getElementById('resultValue');
    const resultText = document.getElementById('resultText');
    
    // 监听文件选择
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            // 显示文件名
            fileName.textContent = this.files[0].name;
        } else {
            fileName.textContent = '未选择任何文件';
        }
    });
    
    // 开始检测按钮点击事件
    startCheck.addEventListener('click', function() {
        // 模拟检测过程
        resultSection.style.display = 'block';
        resultText.textContent = '正在检测中...';
        
        // 进度条动画
        let progress = 0;
        const progressInterval = setInterval(function() {
            progress += 1;
            progressBar.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(progressInterval);
                showResults();
            }
        }, 50);
    });
    
    // 显示随机结果
    function showResults() {
        // 生成0-100之间的随机数
        const randomValue = Math.floor(Math.random() * 101);
        
        // 显示结果
        resultValue.textContent = randomValue;
        
        // 根据相似度显示不同文字
        if (randomValue < 20) {
            resultText.textContent = '恭喜！您的论文几乎没有重复内容。';
            resultValue.style.color = '#4caf50';
        } else if (randomValue < 40) {
            resultText.textContent = '您的论文重复率较低，符合要求。';
            resultValue.style.color = '#8bc34a';
        } else if (randomValue < 60) {
            resultText.textContent = '您的论文重复率适中，建议适当修改。';
            resultValue.style.color = '#ff9800';
        } else if (randomValue < 80) {
            resultText.textContent = '您的论文重复率较高，需要大量修改！';
            resultValue.style.color = '#ff5722';
        } else {
            resultText.textContent = '警告：您的论文重复率极高，可能构成抄袭！';
            resultValue.style.color = '#f44336';
        }
    }
}); 