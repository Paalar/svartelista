import { connect } from 'react-redux';
import FilterBox from '../components/FilterBox';
import {
  filterSearch,
  addCity,
  removeCity,
  queryPosts,
} from '../actions/filterActions';

const mapStateToProps = state => ({
  filter: state.filterBox,
});

const mapDispatchToProps = dispatch => ({
  setSearchText: text => dispatch(filterSearch(text)),
  addCity: city => dispatch(addCity(city)),
  removeCity: city => dispatch(removeCity(city)),
  queryPosts: (text, cities) => dispatch(queryPosts(text, cities)),
});

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterBox);

export default FilterContainer;
