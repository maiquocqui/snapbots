webpackHotUpdate("bundle",{

/***/ "./login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Snapbots\"></ActionBar>\r\n\r\n<FlexboxLayout\r\n    flexDirection=\"column\"\r\n    justifyContent=\"flex-start\"\r\n    backgroundColor=\"#fff\"\r\n>\r\n    <StackLayout\r\n        class=\"banner\"\r\n        backgroundImage=\"~/images/banner.png\"\r\n        height=\"250\"\r\n    >\r\n    </StackLayout>\r\n    <ScrollView flexGrow=\"1\" orientation=\"vertical\">\r\n        <FlexboxLayout\r\n            class=\"login-page\"\r\n            backgroundColor=\"#242424\"\r\n            flexDirection=\"column\"\r\n            justifyContent=\"space-between\"\r\n        >\r\n            <StackLayout class=\"login-inside\">\r\n                <TextField\r\n                    hint=\"USERNAME\"\r\n                    text=\"\"\r\n                    class=\"login-input\"\r\n                ></TextField>\r\n                <TextField\r\n                    hint=\"PASSWORD\"\r\n                    text=\"\"\r\n                    class=\"login-input\"\r\n                ></TextField>\r\n                <FlexboxLayout class=\"checkbox\">\r\n                    <Button class=\"checkbox-square\"></Button>\r\n                    <Label text=\"Remember me\" textWrap=\"true\"></Label>\r\n                </FlexboxLayout>\r\n                <Button class=\"btn-primary\" [text]=\"'Sign in'\"></Button>\r\n                <Label\r\n                    text=\"Forgot password?\"\r\n                    textWrap=\"true\"\r\n                    textAlignment=\"center\"\r\n                    color=\"#fff\"\r\n                    marginTop=\"15\"\r\n                ></Label>\r\n            </StackLayout>\r\n            <FlexboxLayout\r\n                flexDirection=\"row\"\r\n                alignItems=\"center\"\r\n                justifyContent=\"center\"\r\n                flexWrap=\"wrap\"\r\n            >\r\n                <Label\r\n                    text=\"Don't have an account?\"\r\n                    textWrap=\"true\"\r\n                    color=\"#aaa\"\r\n                ></Label>\r\n                <Label\r\n                    text=\"Create account\"\r\n                    textWrap=\"true\"\r\n                    fontWeight=\"600\"\r\n                    color=\"#fff\"\r\n                    marginLeft=\"10\"\r\n                ></Label>\r\n                <Label\r\n                    text=\"or login with\"\r\n                    textWrap=\"true\"\r\n                    color=\"#aaa\"\r\n                    width=\"100%\"\r\n                    textAlignment=\"center\"\r\n                ></Label>\r\n                <FlexboxLayout\r\n                    alignItems=\"center\"\r\n                    justifyContent=\"center\"\r\n                    marginTop=\"10\"\r\n                    marginBottom=\"15\"\r\n                >\r\n                    <FlexboxLayout\r\n                        class=\"social-link\"\r\n                        alignItems=\"center\"\r\n                        justifyContent=\"center\"\r\n                    >\r\n                        <Label class=\"fa\" text=\"&#xf1a0;\"></Label>\r\n                    </FlexboxLayout>\r\n                    <FlexboxLayout\r\n                        class=\"social-link\"\r\n                        alignItems=\"center\"\r\n                        justifyContent=\"center\"\r\n                        marginLeft=\"10\"\r\n                    >\r\n                        <Label class=\"fa\" text=\"&#xf09a;\"></Label>\r\n                    </FlexboxLayout>\r\n                </FlexboxLayout>\r\n                <FlexboxLayout justifyContent=\"center\">\r\n                    <Button class=\"btn-language\" [text]=\"Change Language\"></Button>\r\n                </FlexboxLayout>\r\n            </FlexboxLayout>\r\n        </FlexboxLayout>\r\n    </ScrollView>\r\n</FlexboxLayout>\r\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlnR0FBeWdHLHFYQUFxWCw2WCIsImZpbGUiOiJidW5kbGUuNjQ0ZTVmNmJmZWJhMjFjOWE2YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJTbmFwYm90c1xcXCI+PC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuPEZsZXhib3hMYXlvdXRcXHJcXG4gICAgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIlxcclxcbiAgICBqdXN0aWZ5Q29udGVudD1cXFwiZmxleC1zdGFydFxcXCJcXHJcXG4gICAgYmFja2dyb3VuZENvbG9yPVxcXCIjZmZmXFxcIlxcclxcbj5cXHJcXG4gICAgPFN0YWNrTGF5b3V0XFxyXFxuICAgICAgICBjbGFzcz1cXFwiYmFubmVyXFxcIlxcclxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlPVxcXCJ+L2ltYWdlcy9iYW5uZXIucG5nXFxcIlxcclxcbiAgICAgICAgaGVpZ2h0PVxcXCIyNTBcXFwiXFxyXFxuICAgID5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPFNjcm9sbFZpZXcgZmxleEdyb3c9XFxcIjFcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxyXFxuICAgICAgICA8RmxleGJveExheW91dFxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJsb2dpbi1wYWdlXFxcIlxcclxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cXFwiIzI0MjQyNFxcXCJcXHJcXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiXFxyXFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiXFxyXFxuICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsb2dpbi1pbnNpZGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXFxyXFxuICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJVU0VSTkFNRVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJsb2dpbi1pbnB1dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXFxyXFxuICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJQQVNTV09SRFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJsb2dpbi1pbnB1dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiY2hlY2tib3gtc3F1YXJlXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJSZW1lbWJlciBtZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuLXByaW1hcnlcXFwiIFt0ZXh0XT1cXFwiJ1NpZ24gaW4nXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJGb3Jnb3QgcGFzc3dvcmQ/XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiI2ZmZlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cXFwiMTVcXFwiXFxyXFxuICAgICAgICAgICAgICAgID48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXRcXHJcXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIlxcclxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGZsZXhXcmFwPVxcXCJ3cmFwXFxcIlxcclxcbiAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJEb24ndCBoYXZlIGFuIGFjY291bnQ/XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiI2FhYVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbFxcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiQ3JlYXRlIGFjY291bnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XFxcIjYwMFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCIjZmZmXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cXFwiMTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgID48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIm9yIGxvZ2luIHdpdGhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCIjYWFhXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XFxcIjEwMCVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgID48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8RmxleGJveExheW91dFxcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XFxcImNlbnRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cXFwiMTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209XFxcIjE1XFxcIlxcclxcbiAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8RmxleGJveExheW91dFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzb2NpYWwtbGlua1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XFxcImNlbnRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImZhXFxcIiB0ZXh0PVxcXCImI3hmMWEwO1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInNvY2lhbC1saW5rXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XFxcIjEwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZmFcXFwiIHRleHQ9XFxcIiYjeGYwOWE7XFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuLWxhbmd1YWdlXFxcIiBbdGV4dF09XFxcIkNoYW5nZSBMYW5ndWFnZVxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXHJcXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxyXFxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxyXFxuICAgIDwvU2Nyb2xsVmlldz5cXHJcXG48L0ZsZXhib3hMYXlvdXQ+XFxyXFxuXCIiXSwic291cmNlUm9vdCI6IiJ9