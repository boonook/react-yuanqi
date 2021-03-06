/**
 * Created by hao.cheng on 2017/4/26.
 */
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { ContentState,convertFromHTML } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

const contentBlocks = convertFromHTML('<p>Lorem ipsum ' +
  'dolor sit amet, consectetur adipiscing elit. Mauris tortor felis, volutpat sit amet ' +
  'maximus nec, tempus auctor diam. Nunc odio elit,  ' +
  'commodo quis dolor in, sagittis scelerisque nibh. ' +
  'Suspendisse consequat, sapien sit amet pulvinar  ' +
  'tristique, augue ante dapibus nulla, eget gravida ' +
  'turpis est sit amet nulla. Vestibulum lacinia mollis  ' +
  'accumsan. Vivamus porta cursus libero vitae mattis. ' +
  'In gravida bibendum orci, id faucibus felis molestie ac.  ' +
  'Etiam vel elit cursus, scelerisque dui quis, auctor risus.</p>');

  const sampleEditorContent = ContentState.createFromBlockArray(contentBlocks);

class Wysiwyg extends Component {
    state = {
        editorContent: '',
        editorState: '',
    };

    onEditorChange = (editorContent) => {
        this.setState({
            editorContent,
        },()=>{
            this.props.getContent(draftToHtml(this.state.editorContent))
        });
    };

    componentDidMount(){

    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        },()=>{
            console.log('000000---------',this.state.editorState)
        });
    };

    imageUploadCallBack = file => new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
            const data = new FormData(); // eslint-disable-line no-undef
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        }
    );


    render() {
        console.log(this);
        const { editorState } = this.state;
        return (
            <div className="gutter-example button-demo">
                <Editor
                    defaultEditorState={sampleEditorContent}
                    editorState={editorState}
                    toolbarClassName="home-toolbar"
                    wrapperClassName="home-wrapper"
                    editorClassName="home-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        history: { inDropdown: true },
                        inline: { inDropdown: false },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        image: { uploadCallback: this.imageUploadCallBack },
                    }}
                    onContentStateChange={this.onEditorChange}
                    placeholder="???????????????~~??????@???????????????"
                    spellCheck
                    onFocus={() => {console.log('focus')}}
                    onBlur={() => {console.log('blur')}}
                    onTab={() => {console.log('tab'); return true;}}
                    localization={{ locale: 'zh', translations: {'generic.add': 'Test-Add'} }}
                    mention={{
                        separator: ' ',
                        trigger: '@',
                        caseSensitive: true,
                        suggestions: [
                            { text: 'A', value: 'AB', url: 'href-a' },
                            { text: 'AB', value: 'ABC', url: 'href-ab' },
                            { text: 'ABC', value: 'ABCD', url: 'href-abc' },
                            { text: 'ABCD', value: 'ABCDDDD', url: 'href-abcd' },
                            { text: 'ABCDE', value: 'ABCDE', url: 'href-abcde' },
                            { text: 'ABCDEF', value: 'ABCDEF', url: 'href-abcdef' },
                            { text: 'ABCDEFG', value: 'ABCDEFG', url: 'href-abcdefg' },
                        ],
                    }}
                />

                <style>{`
                    .home-editor {
                        height: 460px;
                        padding:0 10px 0 10px;
                        line-height: normal;
                        overflow-y:screen;
                    }
                `}</style>
                {/*<Card title="????????????HTML" bordered={false}>*/}
                {/*    <pre>{draftToHtml(editorContent)}</pre>*/}
                {/*</Card>*/}
            </div>
        );
    }
}

export default Wysiwyg;
