var Profile = function() {

    var dashboardMainChart = null;

    return {

        //main function
        init: function() {
        
            Profile.initMiniCharts();
        },

        initMiniCharts: function() {

            // IE8 Fix: function.bind polyfill
            if (Metronic.isIE8() && !Function.prototype.bind) {
                Function.prototype.bind = function(oThis) {
                    if (typeof this !== "function") {
                        // closest thing possible to the ECMAScript 5 internal IsCallable function
                        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                    }

                    var aArgs = Array.prototype.slice.call(arguments, 1),
                        fToBind = this,
                        fNOP = function() {},
                        fBound = function() {
                            return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
                                aArgs.concat(Array.prototype.slice.call(arguments)));
                        };

                    fNOP.prototype = this.prototype;
                    fBound.prototype = new fNOP();

                    return fBound;
                };
            }

            $(".sparkline_bar").sparkline([9, 6, 8, 10, 8, 10, 10, 9, 10, 7, 8, 10, 6], {
                type: 'bar',
                width: '60',
                barWidth: 6,
                height: '25',
                barColor: '#F36A5B',
                negBarColor: '#e02222'
            });

            $(".sparkline_bar2").sparkline([8, 9, 10, 11, 10, 10, 12, 10, 10, 11, 9, 12, 11], {
                type: 'bar',
                width: '60',
                barWidth: 6,
                height: '25',
                barColor: '#5C9BD1',
                negBarColor: '#e02222'
            });
        }

    };

}();