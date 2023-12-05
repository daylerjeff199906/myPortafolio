import { useNavigate } from "react-router-dom";

export const usePagination = () => {
  const navigate = useNavigate();

  const updateUrl = ({
    name,
    value,
  }: {
    name: string;
    value: string | number;
  }) => {
    navigate(`?${name}=${value}`);
  };

  return {
    updateUrl,
  };
};
