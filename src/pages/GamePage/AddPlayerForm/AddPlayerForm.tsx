import { Add } from '@mui/icons-material';
import { Box, Button, SxProps, TextField } from '@mui/material';
import { Player } from '@src/common/models/player.interface';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface Props {
  players: Player[];
  onAddPlayer: (name: string) => void;
  sx?: SxProps;
}

const AddPlayerForm = (props: Props) => {
  const { players, onAddPlayer, sx } = props;
  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema: yup.object({
      name: yup
        .string()
        .max(20)
        .required()
        .notOneOf(players.map((player) => player.name))
    }),
    onSubmit: (values, { resetForm }) => {
      onAddPlayer(values.name);
      resetForm();
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', gap: '1rem', ...sx }}>
      <TextField
        fullWidth
        id="name"
        name="name"
        size="small"
        variant="outlined"
        label="שם שחקן"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
      />
      <Button color="primary" variant="contained" type="submit">
        <Add />
      </Button>
    </Box>
  );
};

export default AddPlayerForm;
