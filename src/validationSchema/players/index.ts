import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  position: yup.string().required(),
  statistics: yup.string(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
});
