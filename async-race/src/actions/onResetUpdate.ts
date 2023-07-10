const onResetUpdate = (
  inputCreateName: HTMLInputElement | null,
  inputCreateColor: HTMLInputElement | null,
  btnCreate: HTMLButtonElement | null,
  updateForm: HTMLFormElement | null,
  inputUpdateName: HTMLInputElement | null,
  inputUpdateColor: HTMLInputElement | null,
  btnUpdate: HTMLButtonElement | null
) => {
  if (inputCreateName) inputCreateName.disabled = false;
  if (inputCreateColor) inputCreateColor.disabled = false;
  if (btnCreate) btnCreate.disabled = false;
  if (updateForm) {
    updateForm.reset();
    updateForm.removeAttribute('data-car-id');
  }
  if (inputUpdateName) inputUpdateName.disabled = true;
  if (inputUpdateColor) inputUpdateColor.disabled = true;
  if (btnUpdate) btnUpdate.disabled = true;
};

export default onResetUpdate;
