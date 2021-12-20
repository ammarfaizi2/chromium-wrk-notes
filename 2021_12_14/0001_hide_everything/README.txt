
=============================================
WINDOW - HIDING EVERYTHING EXCEPT "TAB FRAME"
=============================================

    So, for this task, it's a very essential task for us. You need to be able to
    HIDE everything except the Tab Frame itself. To understand better,
    here what I mean:

    chromium --app --noerrordialogs --disable-infobars --window-size=500,500 --window-position=100,100 --app=https://google.com %U

    Try that, basically it shows a Window without any Tabs and almost everything
    hidden... What we want is this, EXCEPT that it's not app/kiosk mode, it's
    literally Chromium modified to hide Tabs, Statusbar, Addressbar, ANYTHING
    EXCEPT THE FRAME SHOULD REMAIN. The rest must be completely destroyed/hidden
    somehow. We still need to be able to tab-switch, open new incognito window,
    open new window... (every window should automatically get rid of everything
    visual except the Tab Frame).

To be clear: we do NOT want to change the BEHAVIOR of Chromium (all shortcuts
should work...), we simply want to "physically" hide everything except the tab
frame.

It needs to work on Windows/Mac/Linux.
