import React, { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import Navbar from './Components/Navbar';
import Result from './Components/Result';
import { FaHtml5, FaCss3, FaJsSquare } from 'react-icons/fa';


function App() {
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');

  const onChangeHtml = useCallback((value) => {
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setJs_Edit(value);
  }, []);

  const srcCode = `
  <html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>
  `;

  return (
    <div>
      <Navbar />
      <div className="p-2">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-[#282c34] p-4 rounded-lg shadow flex-1">
            <h2 className="text-lg font-semibold mb-2 text-white flex items-center">
              <FaHtml5 className="mr-2" />
              HTML
            </h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>
          <div className="bg-[#282c34] p-4 rounded-lg shadow flex-1">
            <h2 className="text-lg font-semibold mb-2 text-white flex items-center">
              <FaCss3 className="mr-2" />
              CSS
            </h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>
          <div className="bg-[#282c34] p-4 rounded-lg shadow flex-1">
            <h2 className="text-lg font-semibold mb-2 text-white flex items-center">
              <FaJsSquare className="mr-2" />
              JavaScript
            </h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>
        <Result srcCode={srcCode} />
      </div>
    </div>
  );
}

export default App;
