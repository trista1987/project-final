export const TopArrow = ({ fill = "#020209" }) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path
          d="M1.40689 11.4965L0.339098 10.5055C-0.113033 10.0859 -0.113033 9.40743 0.339098 8.9923L9.68472 0.314697C10.1369 -0.104899 10.868 -0.104899 11.3153 0.314697L20.6609 8.98784C21.113 9.40743 21.113 10.0859 20.6609 10.5011L19.5931 11.492C19.1362 11.9161 18.3906 11.9072 17.9433 11.4742L12.4264 6.09977V18.9287C12.4264 19.5224 11.9117 20 11.272 20H9.73282C9.09311 20 8.57845 19.5224 8.57845 18.9287V6.09977L3.05669 11.4786C2.60937 11.9161 1.86383 11.925 1.40689 11.4965Z"
          fill={fill}
        />
    </svg>
  );
};