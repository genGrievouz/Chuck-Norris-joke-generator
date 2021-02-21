import { TextField } from '@material-ui/core';

const styles = {
  input: {
    marginTop: '20px'
  }
}

export default function InputText() {

    return (
        <TextField
          style={styles.input}
          id="inputvalue"
          label="type here !"
          defaultValue=""
          helperText="type a text you want to find"
        />
    )
}