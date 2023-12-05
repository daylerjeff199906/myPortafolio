import { useNavigate } from "react-router-dom";

export const usePagination = () => {
  const navigate = useNavigate();

  const getParams = (name: string, defaultValue: string | number = "") => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || defaultValue;
  };

  const updateUrl = ({
    name,
    value,
  }: {
    name: string;
    value: string | number;
  }) => {
    const params = new URLSearchParams(window.location.search);
    if (value === "") {
      params.delete(name);
    } else {
      params.set(name, value.toString());
    }
    const url = `${window.location.pathname}?${params.toString()}`;
    navigate(url, { replace: true });
  };

  return {
    updateUrl,
    getParams,
  };
};
