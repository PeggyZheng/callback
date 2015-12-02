var ProgressBar = function() {
    this.onStartCallback = null;
    this.onProgressCallback = null;
    this.onEndCallback = null;
    this.count = 1

};

ProgressBar.prototype.onStart = function(callback) {
    console.log('registered start callback');
    this.onStartCallback = callback;
};

ProgressBar.prototype.onProgress = function(callback) {
    console.log('registered in progress callback');
    this.onProgressCallback = callback;
};

ProgressBar.prototype.onEnd = function(callback) {
    console.log('registered end callback');
    this.onEndCallback = callback;
};

ProgressBar.prototype.start = function(max) {
    this.onStartCallback();
    do {
        this.count++;
        if (this.count % 10 === 0) {
            this.onProgressCallback();
        }
    } while (this.count < max);
    this.onEndCallback();
};

var progressBar = new ProgressBar();

progressBar.onStart(function() {
    console.log('progress has started');
});

progressBar.onProgress(function() {
    console.log('in progress');
    if (this.count % 10 === 0) {
        console.log(this.count + ' % is completed');
    }
});

progressBar.onEnd(function() {
    console.log('end');
});

progressBar.start(100);
