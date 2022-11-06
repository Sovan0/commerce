import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    background: '#2269f7',
    margin: '0',
    padding: '0',
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttons: {
      display: 'flex',
      alignItems: 'center',
  },
}));