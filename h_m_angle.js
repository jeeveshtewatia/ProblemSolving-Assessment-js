// Find the Smaller Angle
// PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.

// Note: You have to complete Minimal_Angle function. No need to take any input.



function angle(h,m) {
    if((m <0)||( h<0)||(m>60)||(h>12)) return;

if(h==12) return 0;
if(m==60) return 0;
    if((h>=0)&&(m>=0)){
        let hangle = 0.5 *(h*60 + m);
        let mangle = 6* m;
        let angle = Math.abs(hangle-mangle);
        angle = Math.abs(Math.min(angle, 360-angle));
        console.log(angle);
    }

}
angle(6,0);