import { Background, FilterHeader, Filters, GroupButton, StyledFilterMenu } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { generatePath, useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import { CrossIcon } from "assets";
import { Input, InputGroup } from "ui";
import { ROUTE } from "router";
import {
  Button,
  SelectOption,
  Label,
  MovieType,
  CustomSelect,
  Portal,
  Title,
  PortalTarget,
} from "components";

interface IProps {
  toogleFilter: () => void;
}
interface FilterFormProps {
  title: string;
  year: string;
  movieType: SelectOption;
}

const options = [
  { value: MovieType.MOVIES, label: "Movie" },
  { value: MovieType.SERIES, label: "Series" },
  { value: MovieType.EPISODE, label: "Episode" },
];

export const FilterMenu = ({ toogleFilter }: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FilterFormProps>({ mode: "onBlur", defaultValues: { movieType: options[0] } });

  const navigate = useNavigate();

  const handleCross = () => toogleFilter();

  const onSubmit: SubmitHandler<FilterFormProps> = (filterData) => {
    const { year, title, movieType } = filterData;
    toogleFilter();
    navigate(
      `${generatePath(ROUTE.SEARCH, { name: title })}?${createSearchParams({
        year,
        type: movieType.value,
      })}`,
    );
  };

  const handleClear = () => reset();

  return (
    <Portal target={PortalTarget.MODAL}>
      <StyledFilterMenu>
        <Background
          onClick={toogleFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut" }}
        />
        <Filters
          onSubmit={handleSubmit(onSubmit)}
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut" }}
          exit={{ x: 1000, opacity: 0 }}
        >
          <FilterHeader>
            <Title option={"H2"} text={"Filters"} />
            <CrossIcon onClick={handleCross} />
          </FilterHeader>
          <InputGroup>
            <Label text="Full or short movie name">
              <Input
                placeholder="Type title"
                {...register("title", { required: true })}
                $error={errors.title && true}
              />
            </Label>
            <Label text="Year">
              <Input
                placeholder="Type year"
                type="number"
                max="2023"
                min="1970"
                {...register("year", { required: false })}
                $error={errors.year && true}
              />
            </Label>
            <Label text="Movie type">
              <Controller
                name="movieType"
                rules={{ required: true }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomSelect
                    options={options}
                    value={options.find((option) => option.value === value?.value)}
                    defaultValue={options[0]}
                    onChange={(option) => onChange(option)}
                  />
                )}
              />
            </Label>
          </InputGroup>
          <GroupButton>
            <Button
              type="button"
              text={"Clear filter"}
              option={"secondary"}
              onClick={handleClear}
            />
            <Button type="submit" text={"Show results"} option={"primary"} />
          </GroupButton>
        </Filters>
      </StyledFilterMenu>
    </Portal>
  );
};
