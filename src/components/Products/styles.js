import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 0,
    // backgroundColor: '#021336',
    backgroundColor: '#e6ffff',
    padding: theme.spacing(9),
    margin: theme.spacing(-3),
    diplay: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 'auto',
    position: 'center',
  },
  root: {
    flexGrow: 1,
  },
}));