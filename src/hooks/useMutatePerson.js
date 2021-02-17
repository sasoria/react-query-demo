import { useMutation, useQueryClient } from "react-query";
import { lukeUrl } from "../api";

const useMutatePerson = () => {
  const queryClient = useQueryClient();

  return useMutation((person) => {
    // Replace this with postContent
    console.log(person)
  }, {
    onSuccess: () => {
      queryClient.setQueryData(lukeUrl, (obiWan) => {
        return {...obiWan, name: "Grievous"};
      });
    }
  });
};

export default useMutatePerson;
