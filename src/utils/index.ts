export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const ERROR_REASONS = {
  emailExists: 'email-exists',
  invalidData: 'invalid-data',
  notVerified: 'not-verified',
  notExist: 'email-not-exist',
}


// export const renderColoredOption = (text:string) => {
//   if(text.toLowerCase() === "istrue"){
//     return 
//   }
// }



// Form checks

export const nullCheck = (formData:any) => {
  return(Object.values(formData).some((field) => field === "" || field === null));
}


export const getFormattedTrigger = (triggerText: string) => {
  if(triggerText === "only_once") return "Only Once" 
  else return "Everytime"
}
