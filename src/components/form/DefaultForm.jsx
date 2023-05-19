import { FormProvider } from "react-hook-form";

/**
 * @title react-hook-form 기본 FROM
 */
function DefaultForm({ methods, onSubmit, children, ...others }) {
  return (
    <FormProvider {...methods} {...others}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
}

export default DefaultForm;
