module TimeIndependentSchrodingerEquation

using Gridap,GridapGmsh,Gmsh,FileIO
using LinearAlgebra,SparseArrays,Arpack
using DelimitedFiles,SpecialFunctions,KeywordDispatch
using Gridap.CellData;  # para construir condición inicial interpolando una función conocida
# using Gridap.FESpaces;  # para crear matrices afines a partir de formas bilineales
# using Gridap.Algebra;   # para utilizar operaciones algebraicas con Gridap
# using DataInterpolations;   # interpolation function package (https://github.com/PumasAI/DataInterpolations.jl)
using JLD2

include("functions/default_running_structures.jl")

include("functions/mesh_generator_function.jl");
include("functions/boundary_conditions_function.jl")
include("functions/miscellaneous_functions.jl")

include("functions/eigen_problem_definition_function.jl")
include("functions/eigen_problem_solve_function.jl")

include("functions/useful_functions_for_FEM_objects.jl")

include("functions/default_running_miscellaneous_functions.jl")
include("functions/default_running_input_data.jl")
include("functions/default_eigen_problem.jl")

include("functions/binary_file_io.jl")

export Params1D,Params2D,AnalysisParam,InputData,InputData1D,InputData2D # Type's structures

export make_model
export make_boundary_conditions
export measures,space_coord,bilineal_forms,fe_spaces

export eigen_problem,solve
export eigen_values_and_eigen_vectors

export norm_l2,orthogonality_check,eigenstates_normalization,
        aprox_dirac_delta,reduced_integration,density,reduced_density

export default_solver_eigen_problem,ask_for_params,
        get_input,num_ions_BoolCondition,rm_existing_file,
        create_and_remove_model,solver_eigen_problem_with_analysis_param
export input_data
export run_default_eigen_problem,run_default_eigen_problem_jld2,
        set_include,set_type_potential

export write_bin,read_bin

end
