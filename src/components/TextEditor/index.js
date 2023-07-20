import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainDiv,
  SubDiv,
  SubDivFirst,
  Heading,
  Image,
  CardDiv,
  IconsDiv,
  Hr,
  TextInput,
  IconButton,
} from './styledComponents'

class TextEditor extends Component {
  state = {text: '', isBold: false, isItalic: false, isUnderlined: false}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onClickB = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickI = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickU = () => {
    this.setState(prevState => ({isUnderlined: !prevState.isUnderlined}))
  }

  render() {
    const {text, isBold, isItalic, isUnderlined} = this.state
    const textStyle = {
      fontWeight: isBold ? 'bold' : 'normal',
      fontStyle: isItalic ? 'italic' : 'normal',
      textDecoration: isUnderlined ? 'underline' : 'normal',
    }
    return (
      <MainDiv>
        <SubDiv>
          <SubDivFirst>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text-editor"
            />
          </SubDivFirst>
          <CardDiv>
            <IconsDiv>
              <IconButton type="button" onClick={this.onClickB}>
                <VscBold color="#f1f5f9" size={20} style={{marginRight: 10}} />
              </IconButton>
              <IconButton type="button" onClick={this.onClickI}>
                <GoItalic color="#f1f5f9" size={20} style={{marginRight: 10}} />
              </IconButton>
              <IconButton type="button" onClick={this.onClickU}>
                <AiOutlineUnderline color="#f1f5f9" size={20} />
              </IconButton>
            </IconsDiv>
            <Hr />
            <TextInput
              value={text}
              style={textStyle}
              onChange={this.onChangeText}
              rows="24"
              cols="53"
            />
          </CardDiv>
        </SubDiv>
      </MainDiv>
    )
  }
}

export default TextEditor
