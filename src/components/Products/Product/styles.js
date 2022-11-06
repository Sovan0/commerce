import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxHeight: '450px',
    maxWidth: '300px',
    // maxWidth: '100%',
    background: '#2269f7',
    margin: '0',
    padding: '0',
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '-10%',
    color: 'white',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    backdropFilter: 'blur 10px',
    color: 'white',
  },
}));