var documenterSearchIndex = {"docs":
[{"location":"#TimeIndependentSchrodingerEquation.jl","page":"Home","title":"TimeIndependentSchrodingerEquation.jl","text":"","category":"section"},{"location":"#Documentation-of-the-TimeIndependentSchrodingerEquation-library.","page":"Home","title":"Documentation of the TimeIndependentSchrodingerEquation library.","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"eigen_values_and_eigen_vectors","category":"page"},{"location":"#TimeIndependentSchrodingerEquation.eigen_values_and_eigen_vectors","page":"Home","title":"TimeIndependentSchrodingerEquation.eigen_values_and_eigen_vectors","text":"eigen_values_and_eigen_vectors(p,q,r,dΩ,USpace,VSpace; <keyword arguments>)\n\nCompute matrix eigen problem and return eigenvalues and eigenvectors\n\n...\n\nArguments\n\np,q,r::Function: functions from Sturm Liouville formulation\n`dΩ::Gridap.CellData.GenericMeasure : measure of FE grid\nUSpace::FESpace: trial FE Space\nVSpace::FESpace: test FE Space\n`params::Tuple=(nev,tol,maxiter,explicittransform,sigma): params to Arpack eigs function.\nnev::Integer=10: quantity of eigendata to calculate\ntol::Float64=10e-9: relative tolerance for convergence of Ritz values\nmaxiter::Integer=100: maximum number of iterations\nexplicittransform::Symbol=:none: shift and invert should be explicitly invoked in julia code\nsigma::Float64=1.0: the level shift used in inverse iteration.\n\n...\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"eigen_problem","category":"page"},{"location":"#TimeIndependentSchrodingerEquation.eigen_problem","page":"Home","title":"TimeIndependentSchrodingerEquation.eigen_problem","text":"eigen_problem(weakformₖ,weakformₘ,test,trial;; <keyword arguments>)\n\nDefine eigen problem as an input to solve function where we compute eigen problem by Arpack eigs function.\n\n...\n# Arguments\n- `weakformₖ::Function`: forma bilineal lado izquierdo de la formulación débil\n- `weakformₘ::Function`: forma bilineal lado derecho de la formulación débil\n- `test::FESpace`: espacio de prueba, puede ser MultiFieldFESpace\n- `trial::FESpace`: espacio de solución, puede ser MultiFieldFESpace\n- `nev::Int64=10`: número de autovalores requeridos\n- `tol::Float64=10e-6`: relative tolerance for convergence of Ritz values\n- `maxiter::Integer=100`: maximum number of iterations\n- `explicittransform::Symbol=:none`: shift and invert should be explicitly invoked in julia code\n                           `=:auto`:\n                           `=:shiftinvert`:\n- `sigma::Float64=1.0`: the level shift used in inverse iteration.\n- `which::Symbol=:LM`: eigenvalues of largest magnitude (default)\n               `=:SM`: eigenvalues of smallest magnitude\n               `=:LR`: eigenvalues of largest real part\n               `=:SR`: eigenvalues of smallest real part\n               `=:LI`: eigenvalues of largest imaginary part (nonsymmetric or complex matrix only)\n               `=:SI`: eigenvalues of smallest imaginary part (nonsymmetric or complex matrix only)\n               `=:BE`: compute half of the eigenvalues from each end of the spectrum, biased in favor of the high end. (real symmetric matrix only)\n...\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"solve","category":"page"},{"location":"#TimeIndependentSchrodingerEquation.solve","page":"Home","title":"TimeIndependentSchrodingerEquation.solve","text":"solve(prob)\n\nCompute eigen problem by Arpack eigs function and return eigenvalues and eigenvectors.\n\n...\n# Arguments\n...\n`prob::EigenProblem`: problem deinition\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"space_coord","category":"page"},{"location":"#TimeIndependentSchrodingerEquation.space_coord","page":"Home","title":"TimeIndependentSchrodingerEquation.space_coord","text":"space_coord(dom,Δr,n;<keyword arguments>)\n\nReturns coordinate vector (r) and discrete points (pts) for 1D or 2D spaces.     if dimension==\"1D\" ⇒ dom=(x₁,x₂); Δr=Δx; n=nx     if dimension==\"2d\" ⇒ dom=(x₁,x₂,y₁,y₂); Δr=(Δx,Δy); n=(nx,ny) ...\n\nArguments\n\n- `dom::Tuple`: FE cartesian domain.\n- `Δr`:: discretization of FE space.\n- `n`:: number of FE in each direction.\n\n...\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"fe_spaces","category":"page"},{"location":"#TimeIndependentSchrodingerEquation.fe_spaces","page":"Home","title":"TimeIndependentSchrodingerEquation.fe_spaces","text":"fe_spaces(model,reff,grid_type; <keyword arguments>)\n\nCreate finite element (FE) spaces (Trial and Test spaces).\n\n...\n\nArguments\n\nBC_type::String=\"FullDirichlet\": the type of boundary condition.\nTypeData::Type=ComplexF64: the type of data to define FE spaces.\nconf_type::Symbol=:H1: the regularity of the interpolation at the boundaries of cells in the mesh. (e.g.:L2,:H1,:C0,:Hgrad,)\n\n...\n\n\n\n\n\n","category":"function"},{"location":"#**Warning!**","page":"Home","title":"Warning!","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"***->> The documentation is under construction <<-***","category":"page"}]
}